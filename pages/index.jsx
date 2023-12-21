import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/projects");
  const repositories = _repositories ? _repositories : null;
