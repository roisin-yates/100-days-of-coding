import connection from './connection'
import { Styles } from '../../models/styles'
import { Subjects } from '../../models/subjects'
import { Wildcards } from '../../models/wildcards'

export function getAllStyles(db = connection): Promise<Styles[]> {
  return db('styles').select()
}

export function getStyleById(id: number, db = connection): Promise<Styles[]> {
  return db('styles').where('id', id).select()
}

export function getAllSubjects(db = connection): Promise<Subjects[]> {
  return db('subjects').select()
}

export function getSubjectById(
  id: number,
  db = connection
): Promise<Subjects[]> {
  return db('subjects').where('id', id).select()
}

export function getAllWildcards(db = connection): Promise<Wildcards[]> {
  return db('wildcards').select()
}

export function getWildcardById(
  id: number,
  db = connection
): Promise<Wildcards[]> {
  return db('wildcards').where('id', id).select()
}
