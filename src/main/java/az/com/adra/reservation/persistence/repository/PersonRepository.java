package az.com.adra.reservation.persistence.repository;

import az.com.adra.reservation.persistence.entity.DoReserv;
import az.com.adra.reservation.persistence.entity.Meetings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.sql.Date;
import java.util.List;

public interface PersonRepository extends JpaRepository<DoReserv,Long> {

           // @Modifying
          /*  @Query(value = " insert into reservation (id ,fullname, topic, date, start_time, end_time, room_id) \n" +
                    " values (:id ,:fullname, :topic, :date, :start_time, :end_time, :room_id)", nativeQuery = true )
            void insertUser(@Param("id") Long id, @Param("fullname") String fullname, @Param("topic") String topic,
                            @Param("date") Date date, @Param("start_time") Time start_time, @Param("end_time") Time end_time,
                            @Param("room_id") Meetings room_id);
            public DoReserv save(DoReserv person);*/


            //Query("SELECT u FROM User u WHERE u.status = 1") for personList where status = active or deactive



        /*@Query("delete from doreserv d where d.id =:id")
           public  DoReserv removeById(@Param("id") Long in_id);*/
        //@Param("fullname") String in_fullname, @Param("date") Date in_date,
        //@Param("meetings") Meetings in_meeting
        //SELECT d FROM doreserv d WHERE d.fullname =:fullname OR d.date =:date OR d.meetings =:meetings
        //    public void remove(@Param("id") Long id);

    // @Query(value = "select * from doreserv where date=CONVERT(DATE,GetDate())")
    //   public DoReserv save(DoReserv doReserv);

            @Query(value = "SELECT p FROM DoReserv p WHERE (p.fullname =:fullname) and (p.date =:date) and (p.meetings =:meetings)")
            public List<DoReserv> findByFullnameAndDateAndMeetings(@Param("fullname") String in_fullname, @Param("date") Date in_date, @Param("meetings") Meetings in_meeting);

          /*  @Modifying
            @Query("UPDATE DoReserv d  set d.fullname =: fullname, d.topic =: topic, d.date =: date," +
                    " d.startTime =: startTime, d.endTime =: endTime where d.id =: id  and d.status = 'active'")
             DoReserv update(DoReserv doReserv);*/



}
















