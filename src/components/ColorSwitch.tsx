import { Switch, useColorMode, Text, HStack } from "@chakra-ui/react"

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
      <Switch colorScheme='purple' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>{colorMode === "dark" ? "Dark Mode" : " Light Mode"}</Text>
    </HStack>
  )
}

export default ColorSwitch
