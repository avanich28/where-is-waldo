function BoardItem({ place, player }) {
  const { name, time, date } = player;

  return (
    <>
      <td>{place}</td>
      <td className="capitalize">{name}</td>
      <td>{time}</td>
      <td>{date}</td>
    </>
  );
}

export default BoardItem;
