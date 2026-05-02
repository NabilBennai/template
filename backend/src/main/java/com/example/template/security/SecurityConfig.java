package com.example.template.security;
import org.springframework.context.annotation.*;import org.springframework.security.config.annotation.web.builders.HttpSecurity;import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;import org.springframework.security.crypto.password.PasswordEncoder;import org.springframework.security.web.SecurityFilterChain;
@Configuration public class SecurityConfig {
@Bean SecurityFilterChain filterChain(HttpSecurity http) throws Exception { http.csrf(c->c.disable()).authorizeHttpRequests(a->a.requestMatchers("/api/auth/**","/actuator/health").permitAll().anyRequest().authenticated()).httpBasic(b->b.disable()); return http.build(); }
@Bean PasswordEncoder passwordEncoder(){ return new BCryptPasswordEncoder(); }
}
