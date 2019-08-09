package az.com.adra.reservation.model;

import az.com.adra.reservation.persistence.entity.Meetings;
import az.com.adra.reservation.persistence.entity.DoReserv;
import az.com.adra.reservation.persistence.entity.People;


import java.sql.Date;

import java.time.LocalTime;


public class DoReservDto {


    private Long id;
   // private People personId;
    private String fullname;
    private String topic;
    private Date date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Meetings meetings;
    private String status = "active";

    public DoReservDto() {
    }

    public DoReservDto(Long id, String fullname, String topic, Date date, LocalTime startTime, LocalTime endTime, Meetings meetings, String status) {
        this.id = id;
        //this.personId = personId;
        this.fullname = fullname;
        this.topic = topic;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetings = meetings;
        this.status = status;
    }

    public DoReservDto(Meetings meetings) {
        this.meetings = meetings;
    }

    public DoReservDto(String fullname, String topic, Date date, LocalTime startTime, LocalTime endTime, Meetings meetings) {
        this.fullname = fullname;
        this.topic = topic;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetings = meetings;
    }

    public DoReservDto(Long id, String fullname, String topic, Date date, LocalTime startTime, LocalTime endTime, Meetings meetings) {
        this.id = id;
        this.fullname = fullname;
        this.topic = topic;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetings = meetings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

   /* public People getPersonId() {
        return personId;
    }

    public void setPersonId(People personId) {
        this.personId = personId;
    }*/

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
        return "DoReservDto{" +
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

    public DoReserv person() {
        return new DoReserv(fullname, topic, date, startTime, endTime, meetings);
    }
}

