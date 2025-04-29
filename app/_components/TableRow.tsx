function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="odd:bg-light-bg even:bg-light-inTable odd:dark:bg-dark-bg even:dark:bg-dark-inTable border-b border-light-container dark:border-dark-container">
      {children}
    </tr>
  );
}

export default TableRow;
