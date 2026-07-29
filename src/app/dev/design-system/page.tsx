import React from "react";
import { Main, SectionWrapper } from "@/components/layout";
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Heading,
  Text,
} from "@/components/ui";

export default function DesignSystemPage() {
  return (
    <Main>
      <SectionWrapper>
        <Badge>Ambiente de desenvolvimento</Badge>
        <Heading level={1} className="mt-4">
          Design system
        </Heading>
        <Text className="mt-4" size="lg">
          Componentes e tokens reutilizáveis da interface.
        </Text>
      </SectionWrapper>

      <Divider />

      <SectionWrapper className="space-y-12">
        <section aria-labelledby="buttons-title">
          <Heading id="buttons-title" level={2}>
            Botões
          </Heading>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button>Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="ghost">Discreto</Button>
            <Button disabled>Desabilitado</Button>
          </div>
        </section>

        <section aria-labelledby="badges-title">
          <Heading id="badges-title" level={2}>
            Badges e cards
          </Heading>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <Badge>Badge</Badge>
              <Heading level={3} className="mt-4">
                Card reutilizável
              </Heading>
              <Text className="mt-3">
                Superfície com borda, raio e sombra centralizados.
              </Text>
            </Card>
            <Card>
              <Heading level={3}>Escala tipográfica</Heading>
              <Text className="mt-3" size="sm">
                Texto pequeno
              </Text>
              <Text size="md">Texto padrão</Text>
              <Text size="lg">Texto em destaque</Text>
            </Card>
          </div>
        </section>

        <section aria-labelledby="containers-title">
          <Heading id="containers-title" level={2}>
            Containers e espaçamento
          </Heading>
          <div className="mt-6 space-y-4 rounded-card border border-border p-4">
            <Container className="rounded-control bg-surface-subtle py-4">
              Container de conteúdo
            </Container>
            <Container
              size="reading"
              className="rounded-control bg-surface-subtle py-4"
            >
              Container de leitura
            </Container>
          </div>
        </section>
      </SectionWrapper>
    </Main>
  );
}
