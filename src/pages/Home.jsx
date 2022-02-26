export default function Home() {
  return (
    <main>
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
          <h1 className="text-3xl font-light text-white">
            Welcome to the{" "}
            <span className="font-bold">Sacred Heart Shrine, Egmore</span>
          </h1>
        </div>
      </header>
      <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        <div className="rounded-lg flex items-top justify-between">
          <div className="flex-2 pr-10">
            <h1 className="text-xl pb-5  ">
              This Shrine is famous for the Devotion to Sacred Heart, Five
              Wounds and veneration to the Dead Christ. Pilgrims come here every
              Fridays especially on First Fridays in thousand.08.09.2005 Decree
              was issued and elevated as SHRINE.
            </h1>
            <p>
              The Church was established in the year 1848 by Fr.Jerome from
              Portugal. Religious Congregations: Franciscan Sisters of St.Joseph
              ( F.S.J) Sisters of sacred Heart (SSHJ)
            </p>
            <hr className="border-1 mt-10 border-rose-500" />
          </div>
          <div className="">
            <img
              src="/outside.jpg"
              className="drop-shadow rounded-lg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div className="mx-6">
        <img
          className="mt-5 rounded-lg drop-shadow-md hover:drop-shadow-xl w-full"
          src="/church-mass.jpg"
          alt=""
        />
      </div>
    </main>
  );
}
