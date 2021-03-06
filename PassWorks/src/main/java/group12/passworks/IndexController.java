package group12.passworks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import javax.persistence.EntityManager;
import java.util.List;


@Controller
public class IndexController {
    @Autowired
    JdbcTemplate jdbcTemplate; // For connecting to the database

    /* This is the route for when the user first enters the app */
    @GetMapping("/")
    public String displayIndex(Model model) {
        return "index";
    }


    @GetMapping("/generate")
    public String addGeneratedPassword(Model model) {
        String password = getRandomPassword();
        model.addAttribute("GeneratedPassword",password);
        model.addAttribute("password",new Password());
        return "home";
    }

//    @GetMapping("/test")
//    public String test(Model model) {
//        String table = getTable();
//        model.addAttribute("table",table);
//        return "index";
//    }

    public String getRandomPassword() {
        String password = RandomString.generatePassword(12);
        return password;
    }

    @Autowired
    private PasswordRepository passRepo;

    @PostMapping("/home")
    public String storePassword(@RequestParam(name="username") String username,@RequestParam(name="password") String password) {
        Password newPassword = new Password();
        newPassword.setAssociatedUserId(getLoggedInUser().getId());
        newPassword.setValue(password);
        newPassword.setUsername(username);
        System.out.println("new password is " + password);
        passRepo.save(newPassword);

        return "home";
    }

    @Autowired
    private UserRepository userRepo;

    /* Route for the registration, the user is greeted with a form for their login info */
    @GetMapping("/register")
    public String displayRegistrationForm(Model model) {
        model.addAttribute("user", new User());

        return "signup_form";
    }

    /* After user registers and submit, this function handles the creation of the user and the assignment of information */
    @PostMapping("/process_register")
    public String processRegister(User user) {
        user.setPassword(user.getPassword());
        userRepo.save(user); // saves the user to the database

        return "index";
    }

    //
    @GetMapping("/account")
    public String displayAccount(Model model) {
        List<Password> listPasswords = passRepo.findAll();
        listPasswords.removeIf(p -> p.getAssociatedUserId() != getLoggedInUser().getId());
        model.addAttribute("user", getLoggedInUser());
        model.addAttribute("listPasswords", listPasswords);

        return "account";
    }

    @PostMapping("/delete")
    public RedirectView removePassword(@RequestParam(name="passwordId") Long id) {
        passRepo.deleteById(id);

        return new RedirectView("/account");
    }

    @GetMapping("/home")
    public String displayHome(Model model) {
        model.addAttribute("GeneratedPassword","");
        model.addAttribute("password", new Password());
        return "home";
    }



    public User getLoggedInUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long id = null;
        String email;
        if (principal instanceof CustomUserDetails) {
            id = (((CustomUserDetails)principal).getId());
            email = ((CustomUserDetails)principal).getUsername();
        } else {
            email = principal.toString();
        }
        User loggedInUser = new User();
        loggedInUser.setId(id);
        loggedInUser.setEmail(email);

        return loggedInUser;
    }
}
