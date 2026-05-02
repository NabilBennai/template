package com.example.template.user; import java.util.Map; import org.springframework.security.core.Authentication; import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api") public class UserController { @GetMapping("/me") public Map<String,Object> me(Authentication auth){ return Map.of("email",auth.getName()); }}
