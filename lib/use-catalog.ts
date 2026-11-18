'use client';
import {useEffect,useState} from 'react';
import {bdUniversities,germanUniversities,subjects,type Suggestion} from './catalog';
const base={bd:bdUniversities,de:germanUniversities,subjects,programs:[] as Suggestion[]};
export function useCatalog(){const [catalog,setCatalog]=useState(base);useEffect(()=>{let active=true;fetch('/api/catalog').then(async r=>{if(!r.ok)return;const d=await r.json() as typeof base;if(active)setCatalog({bd:[...base.bd,...d.bd],de:[...base.de,...d.de],subjects:[...base.subjects,...d.subjects],programs:d.programs});}).catch(()=>{});return()=>{active=false};},[]);return catalog;}
