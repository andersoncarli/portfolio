declare global {
  var Config: {
    Foo: string;
  };

  var Foo: string;

  import { useRouter } from 'next/router'
  global.useRouter = useRouter

  import useTranslation from "next-translate/useTranslation";
  global.useTranslation = useTranslation;
}

export { };