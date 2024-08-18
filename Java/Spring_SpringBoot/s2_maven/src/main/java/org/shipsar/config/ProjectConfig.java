package org.shipsar.config;


import org.shipsar.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class ProjectConfig {

    @Bean("AUDI R8")
    Vehicle vehicle1() {
        var veh = new Vehicle();
        veh.setName("AUDI R8");
        return veh;
    }

//    @Bean
//    Vehicle vehicle1() {
//        var veh = new Vehicle();
//        veh.setName("AUDI R8");
//        return veh;
//    }

    @Bean(name = "AUDI R9")
    Vehicle vehicle2() {
        var veh = new Vehicle();
        veh.setName("AUDI R9");
        return veh;
    }

    @Primary
    @Bean(value = "AUDI R10")
    Vehicle vehicle3() {
        var veh = new Vehicle();
        veh.setName("AUDI R10");
        return veh;
    }

    @Bean
    String helloBro() {
        return "BEAN SAY HELLO!";
    }

    @Bean
    Integer numberBro() {
        return 152;
    }
}
