import request from 'superagent'
import { Subjects } from '../../models/subjects'
import { Styles } from '../../models/styles'
import { Wildcards } from '../../models/wildcards'

const rootUrl = '/api/v1'

export function getSubjects(): Promise<Subjects[]> {
  try {
    const response = request.get(rootUrl + '/subjects')
    return response.body.subjects
  } catch (err) {
    console.log(err)
    throw new Error('The subjects could not be fetched')
  }
}

export function getSubject(id: number): Promise<Subjects> {
  try {
    const response = request.get(rootUrl + `/subjects/${id}`)
    return response.body.subject
  } catch (err) {
    console.log(err)
    throw new Error('This subject could not be fetched')
  }
}

export function getStyles(): Promise<Styles[]> {
  try {
    const response = request.get(rootUrl + '/styles')
    return response.body.styles
  } catch (err) {
    console.log(err)
    throw new Error('The subjects could not be fetched')
  }
}

export function getStyle(id: number): Promise<Styles> {
  try {
    const response = request.get(rootUrl + `/styles/${id}`)
    return response.body.style
  } catch (err) {
    console.log(err)
    throw new Error('This subject could not be fetched')
  }
}

export function getWildcards(): Promise<Wildcards[]> {
  try {
    const response = request.get(rootUrl + '/wildcards')
    return response.body.wildcards
  } catch (err) {
    console.log(err)
    throw new Error('The subjects could not be fetched')
  }
}

export function getWildcard(id: number): Promise<Wildcards> {
  try {
    const response = request.get(rootUrl + `/wildcards/${id}`)
    return response.body.wildcard
  } catch (err) {
    console.log(err)
    throw new Error('This subject could not be fetched')
  }
}
