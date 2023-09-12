import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectedSortOrder: (order: string) => void
  order: string
}

const SortMenu = ({onSelectedSortOrder, order } : Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ]

  const orderLabel = sortOrder.find(s_order => s_order.value === order);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by {orderLabel?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map(order => (
          <MenuItem onClick={()=> onSelectedSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortMenu
