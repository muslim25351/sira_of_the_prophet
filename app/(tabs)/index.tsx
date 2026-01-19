// import { useEffect, useState } from "react";
// import { FlatList, Text, TouchableOpacity, View } from "react-native";

// import { supabase } from "@/lib/supabase";

// type Audio = {
//   id: number | string;
//   title: string;
//   description?: string | null;
// };

// export default function HomeScreen() {
//   const [audios, setAudios] = useState<Audio[]>([]);

//   useEffect(() => {
//     supabase
//       .from("audios")
//       .select("*")
//       .then(({ data }) => {
//         setAudios((data as Audio[]) || []);
//       });
//   }, []);

//   return (
//     <View className="flex-1 bg-white dark:bg-black p-4">
//       <FlatList
//         data={audios}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity className="py-4 border-b border-gray-200 dark:border-gray-700">
//             <Text className="text-lg text-black dark:text-white">
//               {item.title}
//             </Text>
//             {item.description && (
//               <Text className="text-gray-500">{item.description}</Text>
//             )}
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { lectures } from "@/lib/siraData";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";

export default function HomeScreen() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  const togglePlay = async (item: { id: string; audio: any }) => {
    try {
      // Same item → toggle pause / resume
      if (soundRef.current && playingId === item.id) {
        if (isPaused) {
          await soundRef.current.playAsync(); // resume
          setIsPaused(false);
        } else {
          await soundRef.current.pauseAsync(); // pause
          setIsPaused(true);
        }
        return;
      }

      // Different item → stop old audio
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
      }

      // Load & play new audio
      const { sound } = await Audio.Sound.createAsync(item.audio);
      soundRef.current = sound;

      await sound.playAsync();
      setPlayingId(item.id);
      setIsPaused(false);
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

  return (
    <View className="flex-1 bg-[#0f1f17]">
      <StatusBar barStyle="light-content" />

      {/* ================= HEADER ================= */}
      <View className="flex-row items-center justify-between px-4 py-4">
        <Ionicons name="menu" size={24} color="white" />

        <Text className="text-white text-lg font-semibold">
          Sirah of the Prophet
        </Text>

        <Ionicons name="search" size={22} color="white" />
      </View>

      {/* ================= SECTION TITLE ================= */}
      <View className="px-4 mt-2 mb-2">
        <Text className="text-white text-2xl font-bold">Meccan Period</Text>

        <Text className="text-gray-400 mt-1">
          Chronological Order · 12 Lectures
        </Text>
      </View>

      {/* ================= LECTURE LIST ================= */}
      <FlatList
        data={lectures}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between px-4 py-4 border-b border-[#1f3a2a]">
            {/* LEFT SIDE TEXT */}
            <View className="flex-1 pr-4">
              <Text className="text-white text-base font-semibold">
                {item.title}
              </Text>

              <Text className="text-gray-400 text-sm mt-1">
                {item.description}
              </Text>

              <Text className="text-gray-500 text-xs mt-1">
                {item.duration}
              </Text>
            </View>

            {/* PLAY / PAUSE BUTTON */}
            <TouchableOpacity
              className={`w-10 h-10 rounded-full items-center justify-center ${
                item.id === playingId ? "bg-green-500" : "bg-[#1f3a2a]"
              }`}
              onPress={() => togglePlay(item)}
            >
              <Ionicons
                name={item.id === playingId && !isPaused ? "pause" : "play"}
                size={18}
                color="white"
              />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* ================= MINI PLAYER ================= */}
      <View className="absolute bottom-4 left-4 right-4 bg-[#132b1e] rounded-xl px-4 py-3 flex-row items-center justify-between">
        {/* PLAYER INFO */}
        <View>
          <Text className="text-white text-sm font-semibold">
            The Early Years in Makkah
          </Text>

          <Text className="text-green-400 text-xs mt-1">
            Playing · 12:45 remaining
          </Text>
        </View>

        {/* MINI PLAYER BUTTON */}
        <TouchableOpacity
          className="bg-green-500 w-10 h-10 rounded-full items-center justify-center"
          onPress={() =>
            togglePlay(lectures.find((lecture) => lecture.id === playingId)!)
          }
        >
          <Ionicons
            name={isPaused ? "play" : "pause"}
            size={18}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
