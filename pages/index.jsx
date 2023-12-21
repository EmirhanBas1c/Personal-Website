import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';

export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

return
