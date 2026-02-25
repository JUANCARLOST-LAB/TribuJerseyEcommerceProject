import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

function CartWidget(){
    return (
        <Badge color="error" badgeContent={3}>
            <ShoppingCartIcon fontSize="large"/>
        </Badge>
    )
}

export default CartWidget;