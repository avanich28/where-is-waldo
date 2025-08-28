import { type PropsWithChildren } from "react";

type TableProps = PropsWithChildren<{
  headers: string[];
}>;

function Table({ children, headers }: TableProps) {
  return (
    <section className="relative h-full">
      <div className="absolute w-full h-full border-hidden border-light-container dark:border-dark-container rounded-md overflow-auto scrollbar bg-light-container dark:bg-dark-container">
        <table className="w-full table-auto tracking-wide sm:tracking-wider">
          <thead className="sticky top-0 bg-light-container dark:bg-dark-container text-sm sm:text-base lg:text-lg h-[30px] sm:h-[40px] lg:h-[50px] uppercase primaryTransition">
            <tr className="[&>*]:font-medium text-light-textHead dark:text-dark-textHead">
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center [&>*]:h-[40px] [&>*]:sm:h-[50px] [&>*]:lg:h-[58px] text-sm sm:text-base lg:text-lg font-light sm:font-normal">
            {children}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
