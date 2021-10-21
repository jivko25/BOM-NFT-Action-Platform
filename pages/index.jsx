import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo";
import Avatar from "../src/components/avatar/Avatar";

export default function Index() {
  return (
    <div>
      <Logo type="muted"/>
      <Avatar url = '/images/avatar.png' verified = "true"/>
    </div>
  );
}
