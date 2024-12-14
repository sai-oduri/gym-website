import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(" ", "") as SelectedPage;

  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""} transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
    >
      {page}
    </a>
  )
}

export default Link