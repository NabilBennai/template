package com.example.template.auth;
import jakarta.validation.Valid;import lombok.RequiredArgsConstructor;import java.util.Locale;import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/auth") @RequiredArgsConstructor
public class AuthController { private final AuthService svc;
@PostMapping("/register") AuthDtos.AuthResponse register(@Valid @RequestBody AuthDtos.RegisterRequest r, Locale l){ return svc.register(r,l);} 
@PostMapping("/login") AuthDtos.AuthResponse login(@Valid @RequestBody AuthDtos.LoginRequest r, Locale l){ return svc.login(r,l);} 
@PostMapping("/refresh") AuthDtos.AuthResponse refresh(@Valid @RequestBody AuthDtos.RefreshRequest r){ return svc.refresh(r.refreshToken());}
@PostMapping("/logout") void logout(@Valid @RequestBody AuthDtos.RefreshRequest r){ svc.logout(r.refreshToken());}
}
