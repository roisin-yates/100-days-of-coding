import request from 'superagent'
import { Subjects } from '../../models/subjects'
import { Styles } from '../../models/styles'
import { Wildcards } from '../../models/wildcards'

const rootUrl = '/api/v1'

export async function getSubjects(): Promise<Subjects[]> {
  try {
    const response = await request.get(rootUrl + '/subjects')
    return response.body.subjects
  } catch (err) {
    console.log(err)
    throw new Error('The subjects could not be fetched')
  }
}

export async function getSubject(id: number): Promise<Subjects> {
  try {
    const response = await request.get(rootUrl + `/subjects/${id}`)
    return response.body.subject
  } catch (err) {
    console.log(err)
    throw new Error('This subject could not be fetched')
  }
}

export async function getStyles(): Promise<Styles[]> {
  try {
    const response = await request.get(rootUrl + '/styles')
    return response.body.styles
  } catch (err) {
    console.log(err)
    throw new Error('The subjects could not be fetched')
  }
}

export async function getStyle(id: number): Promise<Styles> {
  try {
    const response = await request.get(rootUrl + `/styles/${id}`)
    return response.body.style
  } catch (err) {
    console.log(err)
    throw new Error('This subject could not be fetched')
  }
}

export async function getWildcards(): Promise<Wildcards[]> {
  try {
    const response = await request.get(rootUrl + '/wildcards')
    return response.body.wildcards
  } catch (err) {
    console.log(err)
    throw new Error('The subjects could not be fetched')
  }
}

export async function getWildcard(id: number): Promise<Wildcards> {
  try {
    const response = await request.get(rootUrl + `/wildcards/${id}`)
    return response.body.wildcard
  } catch (err) {
    console.log(err)
    throw new Error('This subject could not be fetched')
  }
}
