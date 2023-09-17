import { HStack, Heading, Image } from "@chakra-ui/react"
import logo from "../assets/logov2.png"
import ColorSwitch from "./ColorSwitch"

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <Image src={logo} boxSize={`60px`} />
      <Heading id="title" as='h1' size='xl' noOfLines={1}>
   GameHarbor
  </Heading>
      <ColorSwitch />
    </HStack>
  )
}

export default Navbar
