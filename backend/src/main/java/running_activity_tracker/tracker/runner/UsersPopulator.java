package running_activity_tracker.tracker.runner;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import running_activity_tracker.tracker.data.User;
import running_activity_tracker.tracker.data.UserRepository;

import java.util.Set;

@Configuration
public class UsersPopulator {

    @Bean
    ApplicationRunner populateUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {

        return args -> {
            String password = passwordEncoder.encode("123");
            User user = new User(0, "viki", password, Set.of("USER"));
            userRepository.save(user);
        };
    }
}
