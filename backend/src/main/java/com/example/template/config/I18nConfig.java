package com.example.template.config;
import org.springframework.context.*;import org.springframework.context.annotation.*;import org.springframework.context.support.ResourceBundleMessageSource;
@Configuration public class I18nConfig { @Bean MessageSource messageSource(){ var ms=new ResourceBundleMessageSource(); ms.setBasenames("i18n/messages"); ms.setDefaultEncoding("UTF-8"); return ms; } }
