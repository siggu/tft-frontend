import { useQuery } from "@tanstack/react-query";
import Champion from "../components/Champion";
import { getChampions } from "../api";

interface IPhoto {
  pk: number;
  file: string;
}

interface IChampionProps {
  pk: number;
  name: string;
  cost: number;
  photos: IPhoto[];
}

const Champions = () => {
  const { data, isLoading } = useQuery<IChampionProps[]>({
    queryKey: ["champions"],
    queryFn: getChampions,
  });
  //   console.log(data[0].photos[0].file);
  return (
    <>
      {data?.map((champion) => (
        <Champion
          key={champion.pk}
          pk={champion.pk}
          name={champion.name}
          cost={champion.cost}
          avatar={champion.photos[0]?.file || null}
        />
      ))}
    </>
  );
};

export default Champions;
