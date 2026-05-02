package com.example.template.auth;
import jakarta.validation.constraints.*;
public class AuthDtos {
  public record RegisterRequest(@Email @NotBlank String email,@NotBlank @Size(min=8) String password){}
  public record LoginRequest(@Email @NotBlank String email,@NotBlank String password){}
  public record RefreshRequest(@NotBlank String refreshToken){}
  public record AuthResponse(String accessToken,String refreshToken,String type){}
}
