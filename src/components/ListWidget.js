const ListWidget = (props) => {
    return (
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>{props.category1}</a></li>
            <li><a>{props.category2}</a></li>
            <li><a>{props.category3}</a></li>
        </ul>
    )

}
export default ListWidget;

ListWidget.defaultProps = {
    category1: "Camisetas",
    category2: "Calzado",
    category3: "Accesorios"
};