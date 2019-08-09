package az.com.adra.reservation.persistence.entity;


import javax.persistence.*;

@Entity
@Table(name = "room")
public class Meetings {

    @Id
    private Long id;
    private String room;

    public Meetings() {
    }


    public Meetings(Long id, String room) {
        this.id = id;
        this.room = room;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    @Override
    public String toString() {
        return "Meetings{" +
                "id=" + id +
                ", room='" + room + '\'' +
                '}';
    }
}
