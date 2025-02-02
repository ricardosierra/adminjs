import React from 'react'
import { FormGroup, Label, DatePicker } from '@adminjs/design-system'

import * as BackendFilter from '../../../../backend/utils/filter/filter'
import { useTranslation } from '../../../hooks/use-translation'
import { FilterPropertyProps } from '../base-property-props'

const { PARAM_SEPARATOR } = BackendFilter


const Filter: React.FC<FilterPropertyProps> = (props) => {
  const { property, filter, onChange } = props
  const { translateProperty } = useTranslation()

  const fromKey = `${property.path}${PARAM_SEPARATOR}from`
  const toKey = `${property.path}${PARAM_SEPARATOR}to`
  const fromValue = filter[fromKey]
  const toValue = filter[toKey]

  return (
    <React.Fragment>
      <FormGroup variant="filter">
        <Label>{property.label}</Label>
        <Label>{`- ${translateProperty('from')}: `}</Label>
        <DatePicker
          value={fromValue}
          onChange={(data): void => onChange(fromKey, data)}
          propertyType={property.type}
          showYearDropdown
          dropdownMode="select"
           showTimeInput={false}
        />
        <Label mt="default">{`- ${translateProperty('to')}: `}</Label>
        <DatePicker
          value={toValue}
          onChange={(data): void => onChange(toKey, data)}
          showYearDropdown
          dropdownMode="select"
          showTimeInput={false}
          propertyType={property.type}
     
        />
      </FormGroup>
    </React.Fragment>
  )
}

export default Filter
