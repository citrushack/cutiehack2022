import { StatsBlob } from './Blob'

export function FoodStats({ users }) {
  const numMeat = Object.keys(
    users.filter((user) => user.foodPreference === 'Meat')
  ).length
  const numVegetarian = Object.keys(
    users.filter((user) => user.foodPreference === 'Vegetarian')
  ).length
  const numNutAllergy = Object.keys(
    users.filter((user) => user.foodPreference === 'Nut Allergy')
  ).length
  const numTotal = Object.keys(users).length

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-sub-secondary rounded-2xl text-center">
        <h4 className="font-medium">Food (In-Person UCR)</h4>
      </div>
      <div className="grid grid-rows-3 gap-4 rounded-2xl">
        <StatsBlob num={numMeat} numTotal={numTotal} label="Meat Eaters" />
        <StatsBlob
          num={numVegetarian}
          numTotal={numTotal}
          label="Vegetarians"
        />
        <StatsBlob num={numNutAllergy} numTotal={numTotal} label="NutAllergy" />
      </div>
    </div>
  )
}
