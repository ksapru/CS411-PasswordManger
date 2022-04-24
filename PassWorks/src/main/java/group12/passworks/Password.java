package group12.passworks;

import javax.persistence.*;

/* An @Entity class defines a class that will be turned into a table in the database
 *  You use @Table to set up some configuration variables, including the table's name as you see below
 *  You use @Column to define a column in the table, which is an attribute of the class. You also specify the column name,
 *  whether it can be null, unique and the length if it's a string
 */
@Entity
@Table(name = "passwords")
public class Password {


    @Id
    @Column(nullable = false, length = 64)
    private Long id;

    @Column(nullable = false, length = 64)
    private String value;

    // getters and setters are not shown

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}

