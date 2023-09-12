import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


const SortMenu = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Sort by relevance
          </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating  </MenuItem>
      </MenuList>
        </Menu>
      )
}

export default SortMenu