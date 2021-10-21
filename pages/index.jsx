import Example from "../src/components/example/Example";
import Logo from "../src/components/Logo/Logo";

export default function Index() {
  return (
    //Test with if both variants are working and they are working :)
    <div>
      <Logo type="muted"/>
      <Logo/>
    </div>
  );
}
