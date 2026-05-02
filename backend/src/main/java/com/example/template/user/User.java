package com.example.template.user;
import jakarta.persistence.*;import lombok.*;
@Entity @Table(name="users") @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class User { @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id; @Column(unique=true,nullable=false) String email; @Column(nullable=false) String password; @Enumerated(EnumType.STRING) Role role; }
