import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Header  from "../src/components/header/Header";

export default function Index() {
  return (
    <div>
      <Header/>
      {/* <Avatar url = '/images/avatar.png' verified = "true"/> */}
      <User name = "test" info = "testInfo" avatar = '/images/avatar.png' verified = "true"/>
    </div>
  );
}
