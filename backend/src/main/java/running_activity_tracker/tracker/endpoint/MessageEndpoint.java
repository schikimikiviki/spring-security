package running_activity_tracker.tracker.endpoint;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("messages")
public class MessageEndpoint {

    @GetMapping
    String unauthorized (){
        return "This will not be displayed because of lack of authorization";
    }
}
