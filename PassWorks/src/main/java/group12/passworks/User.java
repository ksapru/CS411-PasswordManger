package group12.passworks;

import javax.persistence.*;

/* An @Entity class defines a class that will be turned into a table in the database
 *  You use @Table to set up some configuration variables, including the table's name as you see below
 *  You use @Column to define a column in the table, which is an attribute of the class. You also specify the column name,
 *  whether it can be null, unique and the length if it's a string
 */
@Entity
@Table(name = "users")
public class User {

    /* This is the id column, it starts from 1 and gets incremented every time a Car is added to the table
     *  Equivalent of AUTO_INCREMENT in MySQL
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 45)
    private String email;

    @Column(nullable = false, length = 64)
    private String password;

    // getters and setters are not shown

    public String getPassword() {
        return password;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
