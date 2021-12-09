import TableTr from "./tableTr";
import { TBody } from "./table.styles";
const TableBody = ({ data, dataType, tableLinkValue }) => {
  return (
    <TBody>
      {data.map((tr, index) => {
        return (
          <TableTr
            key={tr.id}
            tableImage={dataType === "movie" ? tr.profile_path : tr.poster_path}
            name={dataType === "movie" ? tr.name : tr.title}
            character={tr.character}
            index={index}
            id={tr.id}
            tableLinkValue={tableLinkValue}
          />
        );
      })}
    </TBody>
  );
};

export default TableBody;
