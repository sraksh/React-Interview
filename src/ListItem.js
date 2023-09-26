const ListItem = (props) => {
  return (
    <>
      {props.data &&
        props.data.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnailUrl} alt={item.thumbnailUrl}></img>
          </li>
        ))}
    </>
  );
};

export default ListItem;
