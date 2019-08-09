package az.com.adra.reservation.model;


import az.com.adra.reservation.persistence.entity.Meetings;

public class MeetingsDto {

    private Long id;
    private String room;

    public MeetingsDto() {
    }

    public MeetingsDto(Long id, String room) {
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
        return "MeetingsDto{" +
                "id=" + id +
                ", room='" + room + '\'' +
                '}';
    }

    public Meetings meetings(){
        return new Meetings(id, room);
    }
}
