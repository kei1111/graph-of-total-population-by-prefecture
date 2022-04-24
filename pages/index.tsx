import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Checkbox from "../components/checkbox";

const Home: NextPage = () => {
  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([]);

  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {};

  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-6">
        都道府県
        <Checkbox
          prefectures={[
            {
              prefCode: 1,
              prefName: "北海道",
            },
            {
              prefCode: 2,
              prefName: "青森県",
            },
            {
              prefCode: 3,
              prefName: "岩手県",
            },
            {
              prefCode: 4,
              prefName: "宮城県",
            },
            {
              prefCode: 5,
              prefName: "秋田県",
            },
            {
              prefCode: 6,
              prefName: "山形県",
            },
            {
              prefCode: 7,
              prefName: "福島県",
            },
            {
              prefCode: 8,
              prefName: "茨城県",
            },
            {
              prefCode: 9,
              prefName: "栃木県",
            },
            {
              prefCode: 10,
              prefName: "群馬県",
            },
            {
              prefCode: 11,
              prefName: "埼玉県",
            },
            {
              prefCode: 12,
              prefName: "千葉県",
            },
            {
              prefCode: 13,
              prefName: "東京都",
            },
            {
              prefCode: 14,
              prefName: "神奈川県",
            },
            {
              prefCode: 15,
              prefName: "新潟県",
            },
            {
              prefCode: 16,
              prefName: "富山県",
            },
            {
              prefCode: 17,
              prefName: "石川県",
            },
            {
              prefCode: 18,
              prefName: "福井県",
            },
            {
              prefCode: 19,
              prefName: "山梨県",
            },
            {
              prefCode: 20,
              prefName: "長野県",
            },
          ]}
          onChange={handleClickCheck}
        />
      </div>
    </div>
  );
};

export default Home;
