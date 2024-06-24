import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, Pressable, Center, VStack, Collapse, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const DownSyndromeCare = () => {
  const [openSection, setOpenSection] = React.useState(null);

  const toggleSection = section => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <ScrollView>
      <Center my="4">
        <Box w="90%">
          <VStack space={4}>
            {/* Cuidados básicos com a criança */}
            <Box>
              <Pressable onPress={() => toggleSection('basicCare')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Cuidados básicos com a criança
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'basicCare' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'basicCare'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    Crianças com síndrome de Down podem ter algumas necessidades específicas de
                    saúde, incluindo exames de vista e audição regulares, monitoramento da tireoide
                    e atenção especial à saúde dental. É importante seguir um cronograma de
                    vacinação regular e garantir que a criança tenha uma dieta balanceada e prática
                    regular de exercícios.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Linha do tempo da troca de dentes */}
            <Box>
              <Pressable onPress={() => toggleSection('teethTimeline')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Linha do tempo da troca de dentes
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'teethTimeline' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'teethTimeline'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    Crianças com síndrome de Down geralmente começam a perder os dentes de leite
                    mais tarde do que outras crianças. Os dentes de leite podem começar a cair por
                    volta dos 6 ou 7 anos de idade, mas é normal que isso aconteça mais tarde.
                    Manter uma boa higiene dental é crucial durante essa fase.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Terapias recomendadas */}
            <Box>
              <Pressable onPress={() => toggleSection('recommendedTherapies')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Terapias recomendadas
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'recommendedTherapies' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'recommendedTherapies'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    Terapias ocupacionais, de fala e fisioterapias são frequentemente recomendadas
                    para ajudar no desenvolvimento motor e de comunicação. Cada criança é única, por
                    isso é importante trabalhar com uma equipe de profissionais para desenvolver um
                    plano personalizado.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Curiosidades */}
            <Box>
              <Pressable onPress={() => toggleSection('curiosities')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Curiosidades
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'curiosities' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'curiosities'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    Crianças com síndrome de Down têm uma chance maior de desenvolver certas
                    condições médicas, como problemas cardíacos congênitos e apneia do sono. No
                    entanto, muitas dessas condições podem ser gerenciadas com cuidados médicos
                    adequados. Além disso, crianças com síndrome de Down frequentemente demonstram
                    grande capacidade de aprendizagem e podem desenvolver habilidades excepcionais
                    em diversas áreas.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Atividades físicas */}
            <Box>
              <Pressable onPress={() => toggleSection('physicalActivities')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Atividades físicas
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'physicalActivities' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'physicalActivities'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    A prática regular de atividades físicas é importante para o desenvolvimento
                    motor e a saúde geral das crianças com síndrome de Down. Exercícios como
                    natação, caminhada e dança podem ser benéficos e também proporcionar
                    oportunidades de socialização.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Educação inclusiva */}
            <Box>
              <Pressable onPress={() => toggleSection('inclusiveEducation')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Educação inclusiva
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'inclusiveEducation' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'inclusiveEducation'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    A educação inclusiva é fundamental para o desenvolvimento social e acadêmico das
                    crianças com síndrome de Down. Escolas inclusivas oferecem suporte
                    individualizado e oportunidades para as crianças aprenderem e crescerem ao lado
                    de seus pares.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Alimentação saudável */}
            <Box>
              <Pressable onPress={() => toggleSection('healthyEating')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Alimentação saudável
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'healthyEating' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'healthyEating'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    Uma dieta equilibrada é essencial para o crescimento e desenvolvimento das
                    crianças com síndrome de Down. É importante incluir uma variedade de alimentos
                    ricos em nutrientes, como frutas, legumes, proteínas magras e grãos integrais, e
                    limitar alimentos processados e açúcares.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Saúde mental */}
            <Box>
              <Pressable onPress={() => toggleSection('mentalHealth')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Saúde mental
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'mentalHealth' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'mentalHealth'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    A saúde mental das crianças com síndrome de Down é tão importante quanto a saúde
                    física. Apoio emocional, terapias e um ambiente positivo e acolhedor podem
                    ajudar a promover o bem-estar mental e emocional.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Inclusão social */}
            <Box>
              <Pressable onPress={() => toggleSection('socialInclusion')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Inclusão social
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'socialInclusion' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'socialInclusion'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    Promover a inclusão social é essencial para o desenvolvimento de habilidades
                    sociais e para a construção de relacionamentos significativos. Encorajar a
                    participação em atividades comunitárias, grupos de apoio e eventos sociais pode
                    beneficiar as crianças com síndrome de Down.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Desenvolvimento da fala */}
            <Box>
              <Pressable onPress={() => toggleSection('speechDevelopment')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Desenvolvimento da fala
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'speechDevelopment' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'speechDevelopment'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    O desenvolvimento da fala pode ser um desafio para crianças com síndrome de
                    Down. A terapia da fala pode ajudar a melhorar as habilidades de comunicação,
                    promovendo a confiança e a capacidade de expressão das crianças.
                  </Text>
                </Box>
              </Collapse>
            </Box>

            {/* Apoio familiar */}
            <Box>
              <Pressable onPress={() => toggleSection('familySupport')}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Apoio familiar
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name={openSection === 'familySupport' ? 'expand-less' : 'expand-more'}
                    size={6}
                  />
                </Box>
              </Pressable>
              <Collapse isOpen={openSection === 'familySupport'}>
                <Box mt="2" p="2" bg="gray.100" borderRadius="md">
                  <Text>
                    O apoio familiar é crucial para o desenvolvimento e bem-estar das crianças com
                    síndrome de Down. Famílias que se envolvem ativamente na educação, terapia e
                    atividades diárias da criança podem ajudar a criar um ambiente de amor e apoio.
                  </Text>
                </Box>
              </Collapse>
            </Box>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default DownSyndromeCare;
