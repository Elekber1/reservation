package az.com.adra.reservation.persistence.repository;

import az.com.adra.reservation.persistence.entity.DoReserv;
import az.com.adra.reservation.persistence.entity.Meetings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

public interface DoReservRepository extends JpaRepository<DoReserv,Long> {


        @Query(value = "SELECT d FROM DoReserv d WHERE  d.fullname =:fullname or d.date =:date or d.meetings =:meetings and d.status='active'")
            public List<DoReserv> findByFullnameAndDateAndMeetings(@Param("fullname") String in_fullname, @Param("date") Date in_date, @Param("meetings") Meetings in_meeting);


        @Modifying
        @Query(value = "update DoReserv d set d.fullname =: fullname, d.topic =: topic, d.date =: date, d.startTime =: startTime," +
                " d.meetings =: meetings, d.endTime=: endTime where d.id =: id and d.status='active'")
          public DoReserv update(DoReserv doReserv);

       @Query(value = "SELECT d FROM  DoReserv d where d.status = 'active'")
       public List<DoReserv> findAll();


}
















