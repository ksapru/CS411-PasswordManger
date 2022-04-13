package group12.passworks;

import java.util.Random;

public class RandomString {
    private static String possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            + "0123456789"
            + "abcdefghijklmnopqrstuvxyz";
    private static int possibleCharacterCount = possibleCharacters.length();

    public static String generatePassword(int passwordLength){
        String password = "";
        Random rand = new Random();

        for(int i = 0; i <passwordLength; i++){
            password += possibleCharacters.charAt(rand.nextInt(possibleCharacterCount));
        }

        return password;
    }
}
