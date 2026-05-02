package com.example.template.auth;
import com.example.template.security.JwtService;import com.example.template.user.*;import lombok.RequiredArgsConstructor;import org.springframework.context.MessageSource;import org.springframework.data.redis.core.StringRedisTemplate;import org.springframework.security.crypto.password.PasswordEncoder;import org.springframework.stereotype.Service;import java.time.Duration;import java.util.Locale;
@Service @RequiredArgsConstructor public class AuthService {
 private final UserRepository repo; private final PasswordEncoder encoder; private final JwtService jwt; private final StringRedisTemplate redis; private final MessageSource ms;
 public AuthDtos.AuthResponse register(AuthDtos.RegisterRequest r, Locale locale){ if(repo.existsByEmail(r.email())) throw new RuntimeException(ms.getMessage("auth.email.exists",null,locale)); User u=repo.save(User.builder().email(r.email()).password(encoder.encode(r.password())).role(Role.USER).build()); return tokens(u.getEmail()); }
 public AuthDtos.AuthResponse login(AuthDtos.LoginRequest r, Locale locale){ User u=repo.findByEmail(r.email()).orElseThrow(()->new RuntimeException(ms.getMessage("auth.invalid",null,locale))); if(!encoder.matches(r.password(),u.getPassword())) throw new RuntimeException(ms.getMessage("auth.invalid",null,locale)); return tokens(u.getEmail()); }
 public AuthDtos.AuthResponse refresh(String rt){ String sub=jwt.subject(rt); if(Boolean.TRUE.equals(redis.hasKey("bl:"+rt))) throw new RuntimeException("Refresh token invalide"); return tokens(sub); }
 public void logout(String rt){ redis.opsForValue().set("bl:"+rt,"1",Duration.ofDays(7)); }
 private AuthDtos.AuthResponse tokens(String sub){ return new AuthDtos.AuthResponse(jwt.accessToken(sub),jwt.refreshToken(sub),"Bearer"); }
}
