const SidebarListOne = (props) => {
  return (
    <div className="sidebar_list_wrapper col mb-4">
      <h5 className="sidebar_headings">{props.listTitle}</h5>
      <ul className="sidebar_list">
        {props.lists.map((list) => (
          <li key={list.id} className={``}>
            <a href="">{list.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarListOne;
