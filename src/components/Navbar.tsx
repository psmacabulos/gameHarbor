import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import ColorSwitch from "./ColorSwitch"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={`60px`} />
      <ColorSwitch />
    </HStack>
  )
}

export default Navbar
