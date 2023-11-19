package running_activity_tracker.tracker.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

@ConfigurationProperties("rsa")
public record RsaKeyProperties(RSAPrivateKey privateKey,
                               RSAPublicKey publicKey) {


}
