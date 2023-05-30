import { getSingleStyle } from '../actions/styles'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'

export interface Numbers {
  numbers: number[]
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

const Style = ({ numbers, setError, setLoading }: Numbers) => {
  const dispatch = useAppDispatch()
  const { styleLoading, styleError, styleData } = useAppSelector(
    (state) => state.style
  )

  useEffect(() => {
    dispatch(getSingleStyle(numbers[0]))
  }, [numbers, dispatch])

  useEffect(() => {
    styleLoading ? setLoading(true) : setLoading(false)
  })

  useEffect(() => {
    styleError ? setError(true) : setError(false)
  })

  return (
    <div>
      {styleData &&
        styleData.map((item) => {
          return (
            <p key={item.id} className="text-teal-600">
              {item.name}
            </p>
          )
        })}
    </div>
  )
}

export default Style
