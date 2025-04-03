package com.ajh.congii;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class CongiiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CongiiApplication.class, args);
	}

}
