package az.com.adra.reservation.persistence.entity;





import az.com.adra.reservation.model.DoReservDto;
import org.hibernate.annotations.RowId;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalTime;


@Entity
@Table(name = "doreserv")
public class DoReserv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;
   /* @JoinColumn(name = "person_id")
    @ManyToOne(cascade =CascadeType.MERGE,fetch = FetchType.LAZY)*/
   //@Column(name = "person_id")
   // private People personId;
    private String fullname;
    private String topic;
    private Date date;
    @Column(name = "start_time")
    private LocalTime startTime;
    @Column(name = "end_time")
    private LocalTime endTime;
    @JoinColumn(name = "room_id")
    @ManyToOne(cascade =CascadeType.MERGE,fetch = FetchType.LAZY)
    private Meetings meetings;
    private String status = "active";


    public DoReserv() {
    }

    public DoReserv(Long id, String fullname, String topic, Date date, LocalTime startTime, LocalTime endTime, Meetings meetings, String status) {
        this.id = id;
        this.fullname = fullname;
        this.topic = topic;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetings = meetings;
        this.status = status;
    }

    public DoReserv(String fullname, String topic, Date date, LocalTime startTime, LocalTime endTime, Meetings meetings) {
        this.fullname = fullname;
        this.topic = topic;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetings = meetings;
    }

 /*   public People getPersonId() {
        return personId;
    }

    public void setPersonId(People personId) {
        this.personId = personId;
    }*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public Meetings getMeetings() {
        return meetings;
    }

    public void setMeetings(Meetings meetings) {
        this.meetings = meetings;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    @Override
    public String toString() {
        return "DoReserv{" +
                "id=" + id +
                ", fullname='" + fullname + '\'' +
                ", topic='" + topic + '\'' +
                ", date=" + date +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", meetings=" + meetings +
                ", status='" + status + '\'' +
                '}';
    }

    public DoReservDto person() {
        return new DoReservDto(fullname, topic, date, startTime, endTime, meetings);
    }
}
